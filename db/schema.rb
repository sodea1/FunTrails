# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_29_180706) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "conditions", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "review_details", force: :cascade do |t|
    t.integer "review_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "condition_id", null: false
    t.index ["condition_id", "review_id"], name: "index_review_details_on_condition_id_and_review_id", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "trail_id", null: false
    t.integer "photo_id", null: false
    t.integer "rating", null: false
    t.text "description"
    t.date "date_hiked", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "activity_id", null: false
    t.index ["activity_id"], name: "index_reviews_on_activity_id"
    t.index ["photo_id", "trail_id"], name: "index_reviews_on_photo_id_and_trail_id", unique: true
    t.index ["photo_id"], name: "index_reviews_on_photo_id"
    t.index ["trail_id"], name: "index_reviews_on_trail_id"
    t.index ["user_id", "trail_id"], name: "index_reviews_on_user_id_and_trail_id", unique: true
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trail_tags", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "trail_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trail_id", "tag_id"], name: "index_trail_tags_on_trail_id_and_tag_id", unique: true
  end

  create_table "trails", force: :cascade do |t|
    t.string "t_name", null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.string "difficulty_level", null: false
    t.string "route_type", null: false
    t.string "estimated_time", null: false
    t.text "description", null: false
    t.string "state", null: false
    t.integer "park_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "country", null: false
    t.string "elevation_gain", null: false
    t.string "length", null: false
    t.index ["park_id"], name: "index_trails_on_park_id"
    t.index ["t_name"], name: "index_trails_on_t_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.text "bio"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
