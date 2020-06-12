from columnar import columnar
from bs4 import BeautifulSoup
import pandas as pd


f = open("C:/Users/koosh/Desktop/HTML Files/THEall.html", encoding="utf8")
soup = BeautifulSoup(f, 'html5lib')
f.close()

headers = ['Rank', 'UniversityName', 'Country']
universityName = []
names = soup.find_all('a', {"class" : "ranking-institution-title"})

for name in names:
    universityName.append(name.text)

ranking = soup.find_all('td', {"class": "rank sorting_1 sorting_2"})
countries = soup.find_all('div', {"class": "location"})

table = []
row = []
table.append(headers)

for rank, name, country in zip(ranking, names, countries):
    row.append(rank.text)
    row.append(name.text)
    row.append(country.text)
    table.append(row)
    row = []



df = pd.DataFrame.from_records(table)
df.to_excel(r'C:\Users\koosh\Desktop\University.xlsx', sheet_name='University', index = False)

table = columnar(table, headers, min_column_width= 12, no_borders=False)
print(table)

