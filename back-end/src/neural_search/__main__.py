from re import search
from gensim.models import Word2Vec
import os
import pandas as pd
import json
import gzip


data = []
# with gzip.open('Busca Neural com Vespa/Ecommerce-App/back-end/src/neural_search/meta_Software.json.gz') as file:
with gzip.open('./src/neural_search/meta_Software.json.gz') as file:
    for linha in file:
        data.append(json.loads(linha.strip()))

df = pd.DataFrame.from_dict(data)

def similar_items(termo_de_pesquisa: str ="Cyberlink PowerDirector 13 Ultimate Suite", qtd_results: int = 20):
    model = Word2Vec.load(os.path.realpath("./src/neural_search/MP2V.model"))
    # model = Word2Vec.load(os.path.realpath("Busca Neural com Vespa/Ecommerce-App/back-end/src/neural_search/MP2V.model"))
    result = model.wv.most_similar(f"title: {termo_de_pesquisa}", topn=qtd_results)
    return mount_objects(result)

def mount_objects(items_keys: list):
    objetos = []
    for item in items_keys:
        coluna = item[0][:item[0].find(":")]
        valor = item[0][item[0].find(":")+2:]
        row = df.loc[df[coluna] == valor]
        objeto = row.head(1).dropna().to_dict()
        if objeto['title'].keys():
            objetos.append(objeto)
        # print(f'{row.head(1).to_dict()}\n\n\n\n')
    return objetos
