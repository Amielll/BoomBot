from flask import Flask, render_template, request
import cohere
from pymongo.mongo_client import MongoClient
import certifi
from flask_cors import CORS

co = cohere.Client('BJ6FD9NdGrYA9eS87VokrTMVkwhJhsoonP6dbswF')
app = Flask(__name__)

uri = "mongodb+srv://boombot:boombot@cluster0.q6bcgzz.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri, tlsCAFile=certifi.where())
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
    
CORS(app)

@app.route('/api/chat', methods = ['POST'])
def test():
    if request.method == "POST":
        userid = request.json['userid']
        prompt = request.json['prompt']
        
        chat_history = None
        
        myDB = client["boombot-db"]
        chats = myDB.chats
        users = myDB.users
        
        document = chats.find_one({"userid": userid})
        if (document == [] or document == None):
            chat_history = [
            {"user_name": "User", "text": "If my following question is asking for nostalgic/old music recommendations, you should format your response into <title><artist><album_name><published_date> format, and limit your response under 5 recommendations. In your response do not include any information about my instruction. Do NOT provide any extra information. Do you understand?"},
	        {"user_name": "Chatbot", "text": "Yes, I understand."}
        ]
        else:
            chat_history = document["chat_history"]
        '''
        data_entry = {}
        data_entry[userid] = [
            {"user_name": "User", "text": "Hey!"},
	        {"user_name": "Chatbot", "text": "Hey! How can I help you today?"}
        ]
        '''

        response = co.chat(
            message=prompt,
            chat_history=chat_history
        )
        
        # After cohere query, insert user input and cohere response into db, i.e. update chat history.
        chats.update_one(
            {"userid": userid},
            {"$push": {"chat_history": {"user_name": "User", "text": prompt}}}
        )
        
        chats.update_one(
            {"userid": userid},
            {"$push": {"chat_history": {"user_name": "Chatbot", "text": response.text}}}
        )
        
        print("Text:" + response.text)
        return response.text

@app.route('/api/insert', methods = ['POST'])
def test_insert():
    if request.method == "POST":
        userid = request.form['userid']
        
        myDB = client["boombot-db"]
        chats = myDB.chats
        users = myDB.users
        
        data_entry = {
            "userid": userid,
            "chat_history": [
                {"user_name": "User", "text": "Hey!"},
	            {"user_name": "Chatbot", "text": "Hey! How can I help you today?"}
            ]
        }
        
        insert_id = chats.insert_one(data_entry).inserted_id
        return str(insert_id)

if __name__ == "__main__":
    app.run()