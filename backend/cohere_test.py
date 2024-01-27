import cohere
co = cohere.Client('BJ6FD9NdGrYA9eS87VokrTMVkwhJhsoonP6dbswF')
response = co.chat(
    chat_history=[
    {"role": "USER", "message": "Can you recommend 2 song that are nostalgic?"},
    {"role": "CHATBOT", "message": "The man who is widely credited with discovering gravity is Sir Isaac Newton"}
  ],
  message="Can you recommend 2 song that are nostalgic?",
  # perform web search before answering the question. You can also use your own custom connector.
  connectors=[{"id": "web-search"}]
)
print(response.text)
