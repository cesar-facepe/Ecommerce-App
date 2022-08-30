from src.neural_search.__main__ import similar_items

def query(dados) -> dict:
    result = [
        {
            'id': 1,
            'nome':'SSD NVMe 400GB',
            'descricao':'SDD de altissíma I/O',
            'preco':500.0
        },
        {
            'id': 2,
            'nome':'TESTE',
            'descricao':'ADSDADsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaASDSA',
            'preco':32.0
        },
        {
            'id': 3,
            'nome':'lOAAA',
            'descricao':'DASDASDAS',
            'preco':534.0
        },
        {
            'id': 4,
            'nome':'TESTE3333',
            'descricao':'DDDSA',
            'preco':424.0
        },
        {
            'id': 5,
            'nome':'DSASDASD',
            'descricao':'FDWDSFDFDSFDS',
            'preco':67.0
        },
        {
            'id': 6,
            'nome':'FGDDF',
            'descricao':'DDFGGDF',
            'preco':98.0
        },
        {
            'id': 7,
            'nome':'ADDDA',
            'descricao':'DASADA',
            'preco':89.0
        },
        {
            'id': 8,
            'nome':'FSDDFSFDS',
            'descricao':'DFSDFSDFS',
            'preco':8989.0
        },
        {
            'id': 9,
            'nome':'SDS',
            'descricao':'ASDAF',
            'preco':234.0
        },
    ]
    return similar_items(dados['query'])
