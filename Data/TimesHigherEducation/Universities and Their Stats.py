from columnar import columnar
from bs4 import BeautifulSoup
import pandas as pd


f = open("C:/Users/koosh/Desktop/HTML Files/THEall.html", encoding="utf8")
soup = BeautifulSoup(f, 'html5lib')
f.close()

headers = ['UniversityName', 'Country', 'NumOfStudents', 'StudentStaffRatio', 'IntlStudents', 'FemaleToMale']
universityName = []
names = soup.find_all('a', {"class" : "ranking-institution-title"})

for name in names:
    universityName.append(name.text)

countries = soup.find_all('div', {"class": "location"})
studentNumber = soup.find_all('td', {"class" : "stats stats_number_students"})
studentPerStaff = soup.find_all('td', {"class" : "stats stats_student_staff_ratio"})
internationalStudents = soup.find_all('td', {"class" : "stats stats_pc_intl_students"})
femaleMaleRatio = soup.find_all('td', {"class" : "stats stats_female_male_ratio"})
table = []
row = []
table.append(headers)

for name, country, stdNum, spf, intStd, fmr in zip(names, countries, studentNumber, studentPerStaff, internationalStudents, femaleMaleRatio):
    row.append(name.text)
    row.append(country.text)
    row.append(stdNum.text)
    row.append(spf.text)
    row.append(intStd.text)
    row.append(fmr.text)
    table.append(row)
    row = []


df = pd.DataFrame.from_records(table)
df.to_excel(r'C:\Users\koosh\Desktop\University.xlsx', sheet_name='University', index = False)

table = columnar(table, headers, min_column_width= 12, no_borders=False)
print(table)

