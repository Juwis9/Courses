class Point():
	def __init__(self, x, y):
		self.x = x
		self.y = y


p = Point(2,8)
print(f"x = {p.x} and y = {p.y}")


class Flight():
	def __init__(self, capacity):
		self.capacity = capacity
		self.passengers = []

	def addPassenger(self, name):
		if not self.openSeats():
			return False
		self.passengers.append(name)
		return True

	def openSeats(self):
		return self.capacity - len(self.passengers)

flight = Flight(3)

people = ["Karen", "Janette", "Perez", "Avila"]	
for person in people:
	if flight.addPassenger(person):
		print(f"The passenger {person} has been added to the flight")
	else:
		print(f"Sorry, we couldnt add {person} to this flight cause is full")