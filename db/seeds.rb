# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.create!({lat: 37.779871,lng: -122.435549, description: "Nice bench in Fillmore"})
Bench.create!({lat: 37.784891,lng: -122.452715, description: "Nice bench in Presidio"})
Bench.create!({lat: 37.750627,lng: -122.484644, description: "Nice bench in Sunset"})
