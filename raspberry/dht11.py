#!/usr/bin/python
import sys
import Adafruit_DHT
import requests
import json
import random
    

sensor_args = { '11': Adafruit_DHT.DHT11,
                '22': Adafruit_DHT.DHT22,
                '2302': Adafruit_DHT.AM2302 }
global idMarina, pressionMax, pressionMin
idMarina = 1
pressionMax = 1080
pressionMin = 950


def send(humidite,temperature,pression):
	try:
	    url = "http://54.39.145.59:8085/humidites"
	    params = {'valeur':str(humidite),'marina':str(idMarina)}
	    print params
	    r=requests.post(url = url, json = params)
	    print r.text
	
	    url = "http://54.39.145.59:8085/temperatures"
	    params = {'valeur':str(temperature),'marina':str(idMarina)}
	    print params
	    r=requests.post(url = url, json = params)
	    print r.text
	
	    url = "http://54.39.145.59:8085/pressions"
	    params = {'valeur':str(pression),'marina':str(idMarina)}
	    print params
	    r=requests.post(url = url, json = params)
	    print r.text
	    print ""
	    print ""
	    print ""
	    print ""
	except:
		print ("erreur de connexion")

def generationPression(pression):
	rand = (random.random()*2)-1
	pression = pression + rand
	print rand
	print pression
	return pression


if len(sys.argv) == 3 and sys.argv[1] in sensor_args:
    sensor = sensor_args[sys.argv[1]]
    pin = sys.argv[2]
else:
    print('Usage: sudo ./Adafruit_DHT.py [11|22|2302] <GPIO pin number>')
    print('Example: sudo ./Adafruit_DHT.py 2302 4 - Read from an AM2302 connected to GPIO pin #4')
    sys.exit(1)

while True:
	humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
	pression = 1000
	if humidity is not None and temperature is not None :
		if humidity < 100:
			#print('Temp={0:0.1f}*  Humidity={1:0.1f}%'.format(temperature, humidity))
			pression = generationPression(pression)
			send(humidity,temperature,pression)
		else :
			print(' error Temp={0:0.1f}*  Humidity={1:0.1f}%'.format(temperature, humidity))
	else:
		print('Failed to get reading. Try again!')
		sys.exit(1)
