import json
from flask import Flask, jsonify, request, make_response, render_template
from flask_cors import CORS
from src.query_response_dto import query

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
    try:
        resultado = query(dados)
    except Exception:
        resultado = "Produto não consta na plataforma"
    print(resultado)
    response = make_response(
        jsonify(
                {"resultado":resultado}
        )
    )
    response.headers.add("Access-Control-Allow-Origin", "*")
    # response.headers["Content-Type"] = "application/json"
    return response

if __name__ == "__main__":
    app.run(debug=True)
