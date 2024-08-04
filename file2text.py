# from pypdf import PdfReader
# file = open("tamil.pdf",'rb')

# reader = PdfReader(file)
# num_pages = reader.pages
# for p in range(len(num_pages)):
#     page = reader.pages[p]
#     text=page.extract_text()
#     print(text)

from PIL import Image
from pytesseract import pytesseract
import enum
import text2text

class OS(enum.Enum):
    Mac = 0
    Windows = 1

class Language(enum.Enum):
    ENG = 'eng'
    RUS = 'rus'
    ITA = 'ita'
    TAM = 'tam'

class ImageReader:

    def __init__(self,os : OS):
        if os== OS.Mac:
            print()

        if os == OS.Windows:
            windows_path = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
            pytesseract.tesseract_cmd = windows_path
            print("running on : windows\n")

    def extract_text(self,image:str,Language) -> str:
        img = Image.open(image)
        print("hll")
        extracted_text = pytesseract.image_to_string(img,lang= "eng")
        print(extracted_text)
        return extracted_text
    
if __name__ == "__main__":
    ir = ImageReader(OS.Windows)
    path = "Copy of Black & white Simple Minimalist Book Store Invoice (1).pdf"

    if path[len(path)-4:len(path)] == ".pdf":

        from pdf2image import convert_from_path
        images = convert_from_path(path)
        for i in range(len(images)):
            images[i].save('page'+ str(i) +'.jpg', 'JPEG')

            text = ir.extract_text('page'+ str(i) +'.jpg',Language = 'eng')

            # text2text.translate("Tamil","English",text)
            print(text)
    else:
            print("hellow")
            text = ir.extract_text(path,Language = 'eng')
            print(text)
            # text2text.translate("Russian","English",text)
  