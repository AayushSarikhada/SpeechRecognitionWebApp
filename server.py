import numpy as np
from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# model = pickle.load(open('model.pkl','rb'))

@app.route('/api',methods=['POST'])
def predict():
    # data = request.get_json(force=true)
    # prediction = model.predict("")
    # output  = prediction[0]
    output = "run success"
    return jsonify(output)

if __name__ == '__main__':
    app.run(port=5000,debug=True)

