warrior = Warrior.create(name: "Gus", health: 100, wealth: 20, energy: 50)
mage = Mage.create(name: "Mara", health: 50, wealth: 20, energy: 100)
ranger = Ranger.create(name: "Flavie", health: 80, wealth: 20, energy: 75)


lucian = Enemy.create(name: "Lucian", health: 25, wealth: 25, energy: 50)
lich_king = Enemy.create(name: "The Lich King", health: 150, wealth: 125, energy: 200)
golem = Enemy.create(name: "Giant Stone Golem", health: 200, wealth: 150, energy: 50)
banshee = Enemy.create(name: "Banshee Queen", health: 125, wealth: 125, energy: 250)



slash = Skill.create(warrior_skill_one: "Slash", warrior_id: 1)
bash = Skill.create(warrior_skill_two: "Bash", warrior_id: 2)
fireball = Skill.create(mage_skill_one: "Fireball", mage_id: 1)
frostbolt = Skill.create(mage_skill_two: "Frostbolt", mage_id: 2)
focus_shot= Skill.create(ranger_skill_one: "Focus Shot", ranger_id: 1)
aim_shot = Skill.create(ranger_skill_two: "Aimed Shot", ranger_id: 2)

enemy_skill_one = Skill.create(enemy_skill_one: "Bite", enemy_id: 1)
enemy_skill_two = Skill.create(enemy_skill_two: "Touch of Death", enemy_id: 2)
enemy_skill_three = Skill.create(enemy_skill_three: "Upheaval", enemy_id: 3)
enemy_skill_four = Skill.create(enemy_skill_four: "Chaos Ray", enemy_id: 4)
