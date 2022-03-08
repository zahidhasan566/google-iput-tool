import http.client
def request(word):
    conn = http.client.HTTPSConnection('inputtools.google.com')
    conn.request('GET', '/request?text=' + word + '&itc=bn-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8&app=test')
    res = conn.getresponse()
    print("\xe0".decode('utf-8'))
    print(res.read())

request(word='shopup')
