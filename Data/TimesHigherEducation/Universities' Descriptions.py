from bs4 import BeautifulSoup
import re
import requests
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException

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
            links.append('https://www.timeshighereducation.com' + link)

about = []
for l in links:
    browser = webdriver.Chrome("chromedriver.exe")
    browser.get(l)
    try:
        about.append(browser.find_element_by_class_name("read-more-processed").text)
        print(browser.find_element_by_class_name("read-more-processed").text + '\n\n\n\n')
        browser.close()
    except NoSuchElementException:
        try:
            about.append(browser.find_element_by_class_name("tabbed-content__tabs").text)
            print(browser.find_element_by_class_name("tabbed-content__tabs").text + '\n\n\n\n')
            browser.close()
        except NoSuchElementException:
            about.append(browser.find_element_by_class_name("institution-info__title").text)
            print(browser.find_element_by_class_name("institution-info__title").text + '\n\n\n\n')
            browser.close()



