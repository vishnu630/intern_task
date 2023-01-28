from langid import classify

def process_lang(text):
    val = classify(text)
    res = list(val)
    if res[0]=='en':
        return True
    else:
        return False


from fastapi import FastAPI
from pydantic import BaseModel

class Item(BaseModel):
    text: str

app = FastAPI()

@app.post("/validate_text")
async def create_item(item: Item):
    text=item.text
    result=process_lang(text)
    response={"isvalid_English_text":result}
    return response