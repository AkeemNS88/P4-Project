puts "temp seeding user data"
user_one = User.create(username: "Person", password_digest: "password")
user_two = User.create(username: "Person Two", password_digest: "password")

puts "Seeding Skill Masters"
warrior = Master.create(name: "Gus", health: 100, wealth: 20, energy: 50)
# mage = Master.create(name: "Mara", health: 50, wealth: 20, energy: 100, user_id: user_one.id, encounter_id:)
# ranger = Master.create(name: "Flavie", health: 80, wealth: 20, energy: 75, user_id: user_one.id, encounter_id:)
lucian = Master.create(name: "Lucian", health: 25, wealth: 25, energy: 50)
lich_king = Master.create(name: "The Lich King", health: 150, wealth: 125, energy: 200)
golem = Master.create(name: "Giant Stone Golem", health: 200, wealth: 150, energy: 50)
banshee = Master.create(name: "Banshee Queen", health: 125, wealth: 125, energy: 250)

puts "Seeding Encounters"
intro = Encounter.create(name: "Begin", encounter_number: 1, master_id: warrior.id, user_id: user_one.id)
lucian = Encounter.create(name: "Lucian", encounter_number: 2, master_id: warrior.id, user_id: user_one.id )
lich = Encounter.create(name: "Lich King", encounter_number: 3, master_id: warrior.id, user_id: user_one.id)
golem = Encounter.create(name: "Golem", encounter_number: 4, master_id: warrior.id, user_id: user_one.id)
banshee = Encounter.create(name: "Banshee", encounter_number: 5, master_id: warrior.id, user_id: user_one.id)

# Encounter.encounter_number === high score
#when die, get request for this number ^^
#thats ur score...........

# slash = Skill.create(name: "Slash", master_id: warrior.id )
# bash = Skill.create(name: "Bash", master_id: warrior.id )
# fireball = Skill.create(name: "Fireball", master_id: mage.id)
# frostbolt = Skill.create(name: "Frostbolt", master_id: mage.id)
# focus_shot= Skill.create(name: "Focus Shot", master_id: ranger.id)
# aim_shot = Skill.create(name: "Aimed Shot", master_id: ranger.id)
# enemy_skill_one = Skill.create(name: "Bite", master_id: lucian.id)
# enemy_skill_two = Skill.create(name: "Touch of Death", master_id: lich_king.id)
# enemy_skill_three = Skill.create(name: "Upheaval", master_id: golem.id)
# enemy_skill_four = Skill.create(name: "Chaos Ray", master_id: banshee.id)
