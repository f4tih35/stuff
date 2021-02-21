import requests
import re
import sys
word = sys.argv[1]
wordlist = sys.argv[2]
url = 'https://www.instagram.com/'
r = requests.get(url)
file = open(wordlist, 'r') 
lines = file.readlines() 

for m in re.finditer('%', word):
    for wl in lines:
        s = list(word)
        s[m.start()] = wl
        asd = "".join(s)
        asd = asd.rstrip('\r\n')
        r = requests.get(url+asd)
        if r.status_code == 200:
            print(r.url)