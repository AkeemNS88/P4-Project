# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_24_180925) do

  create_table "enemies", force: :cascade do |t|
    t.string "name"
    t.integer "health"
    t.integer "wealth"
    t.integer "energy"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "mages", force: :cascade do |t|
    t.string "name"
    t.integer "health"
    t.integer "wealth"
    t.integer "energy"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rangers", force: :cascade do |t|
    t.string "name"
    t.integer "health"
    t.integer "wealth"
    t.integer "energy"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "warrior_skill_one"
    t.string "warrior_skill_two"
    t.string "mage_skill_one"
    t.string "mage_skill_two"
    t.string "ranger_skill_one"
    t.string "ranger_skill_two"
    t.string "enemy_skill_one"
    t.string "enemy_skill_two"
    t.string "enemy_skill_three"
    t.string "enemy_skill_four"
    t.integer "warrior_id", null: false
    t.integer "ranger_id", null: false
    t.integer "mage_id", null: false
    t.integer "enemy_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["enemy_id"], name: "index_skills_on_enemy_id"
    t.index ["mage_id"], name: "index_skills_on_mage_id"
    t.index ["ranger_id"], name: "index_skills_on_ranger_id"
    t.index ["warrior_id"], name: "index_skills_on_warrior_id"
  end

  create_table "warriors", force: :cascade do |t|
    t.string "name"
    t.integer "health"
    t.integer "wealth"
    t.integer "energy"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "skills", "enemies"
  add_foreign_key "skills", "mages"
  add_foreign_key "skills", "rangers"
  add_foreign_key "skills", "warriors"
end
