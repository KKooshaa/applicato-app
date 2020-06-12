from bs4 import BeautifulSoup
import re
import requests


f = open("C:/Users/koosh/Desktop/HTML Files/THEall.html", encoding="utf8")
soup = BeautifulSoup(f, 'html5lib')
f.close()

tags = soup.find_all('a')
list = []
for tag in tags:
    list.append((tag.get('href')))

links = []
for link in list:
    if re.match(r'^/world-university-rankings', link):
        if 'https://www.timeshighereducation.com'+link not in links:
            print('https://www.timeshighereducation.com' + link)