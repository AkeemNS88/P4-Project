warrior = Warrior.create(name: "Gus", health: 100, wealth: 20, energy: 50, skill_id: 1)
mage = Mage.create(name: "Mara", health: 50, wealth: 20, energy: 100, skill_id: 3)
ranger = Ranger.create(name: "Flavie", health: 80, wealth: 20, energy: 75, skill_id: 5)


lucian = Enemy.create(name: "Lucian", health: 25, wealth: 25, energy: 50, skill_id: 7)
lich_king = Enemy.create(name: "The Lich King", health: 150, wealth: 125, energy: 200, skill_id: 8)
golem = Enemy.create(name: "Giant Stone Golem", health: 200, wealth: 150, energy: 50, skill_id: 9)
banshee = Enemy.create(name: "Banshee Queen", health: 125, wealth: 125, energy: 250, skill_id: 10)



slash = Skill.create(warrior_skill_one: "Slash")
bash = Skill.create(warrior_skill_two: "Bash")
fireball = Skill.create(mage_skill_one: "Fireball")
frostbolt = Skill.create(mage_skill_two: "Frostbolt")
focus_shot= Skill.create(ranger_skill_one: "Focus Shot")
aim_shot = Skill.create(ranger_skill_two: "Aimed Shot")

enemy_skill_one = Skill.create(enemy_skill_one: "Bite")
enemy_skill_two = Skill.create(enemy_skill_two: "Touch of Death")
enemy_skill_three = Skill.create(enemy_skill_three: "Upheaval")
enemy_skill_four = Skill.create(enemy_skill_four: "Chaos Ray")
