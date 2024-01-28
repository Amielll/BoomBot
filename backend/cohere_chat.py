import cohere
from pymongo.mongo_client import MongoClient
import certifi

co = cohere.Client('BJ6FD9NdGrYA9eS87VokrTMVkwhJhsoonP6dbswF')

uri = "mongodb+srv://boombot:boombot@cluster0.q6bcgzz.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri, tlsCAFile=certifi.where())
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


def chat(userid, prompt):
    chat_history = None

    myDB = client["boombot-db"]
    chats = myDB.chats
    users = myDB.users

    document = chats.find_one({"userid": userid})
    if document == [] or document is None:
        chat_history = [
            {"user_name": "User",
             "text": "If my following question is asking for nostalgic/old music recommendations, you should format your response into <title><artist><album_name><published_date> format, and limit your response under 5 recommendations. In your response do not include any information about my instruction. Do NOT provide any extra information. Do you understand?"},
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
