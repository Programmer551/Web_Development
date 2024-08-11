import requests
from bs4 import BeautifulSoup
url = "https://programmer551.github.io/Notes-App/"

page = requests.get(url)
content=page.content
soup= BeautifulSoup(content,"html.parser")

# print(soup.h5.prettify())


# print(soup.find_all("h5",class_="card-title"))
# print(soup.find("h5").getText())
# print(type(soup.getText()))



# anchors=soup.find_all("a")
# for link in anchors:
#     print(link.get("href"))


h5 =soup.find("h5")
print(h5.contents)
print(h5.children)