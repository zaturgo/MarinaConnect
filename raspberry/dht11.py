#!/usr/bin/python
import sys
#import Adafruit_DHT
import requests
import json
    
"""
sensor_args = { '11': Adafruit_DHT.DHT11,
                '22': Adafruit_DHT.DHT22,
                '2302': Adafruit_DHT.AM2302 }
				"""
global idMarina
idMarina = 1


def send(humidite):
    url = "http://54.39.145.59:8085/humidites"
    params = {'valeur':str(humidite),'marina':str(idMarina)}
    print params
    r=requests.post(url = url, data = params)
    print r.text


"""
if len(sys.argv) == 3 and sys.argv[1] in sensor_args:
    sensor = sensor_args[sys.argv[1]]
    pin = sys.argv[2]
else:
    print('Usage: sudo ./Adafruit_DHT.py [11|22|2302] <GPIO pin number>')
    print('Example: sudo ./Adafruit_DHT.py 2302 4 - Read from an AM2302 connected to GPIO pin #4')
    sys.exit(1)
while True:
	humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

        if humidity is not None and temperature is not None :
            if humidity < 100:
                print('Temp={0:0.1f}*  Humidity={1:0.1f}%'.format(temperature, humidity))
                send(humidity)
            else :
                print(' error Temp={0:0.1f}*  Humidity={1:0.1f}%'.format(temperature, humidity))
	else:
	    print('Failed to get reading. Try again!')
	    sys.exit(1)"""
send(10.1)
