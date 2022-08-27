import json
from flask import Flask, jsonify, request, make_response, render_template
from flask_cors import CORS
from query_response_dto import query

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/analise/relatorio.html")
def analise():
    return render_template("Relatorio01.html")

@app.route("/api/pesquisar", methods=["POST"])
def buscar():
    dados = json.loads(request.data)
    resultado = query(dados)
    response = make_response(
        jsonify(
            {
                "resultado": resultado
            }
        )
    )
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == "__main__":
    app.run(debug=True)
