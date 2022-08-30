from gensim.models import Word2Vec
import os

def similar_items(termo_de_pesquisa="Cyberlink PowerDirector 13 Ultimate Suite", qtd_results=20):
    model = Word2Vec.load(os.path.realpath("./src/neural_search/MP2V.model"))
    result = model.wv.most_similar(f"title: {termo_de_pesquisa}", topn=qtd_results)
    return result