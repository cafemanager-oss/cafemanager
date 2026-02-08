#!/bin/bash

# Connect to psql

docker exec -it cafemanager-dev-db-1 psql -U app_user app_database_main;

# Focus on app schema

SET search_path TO app,public;

# User data table

CREATE TYPE user_type AS ENUM ('owner', 'employee');

CREATE TABLE user_data (
    clerk_user_id TEXT UNIQUE NOT NULL PRIMARY KEY,
    user_type user_type NOT NULL,
    onboarding_done BOOLEAN NOT NULL
);

CREATE TABLE cafe (
    clerk_owner_id TEXT NOT NULL REFERENCES user_data(clerk_user_id),
    cafe_name TEXT NOT NULL,
    cafe_description TEXT NOT NULL,
    cafe_phone TEXT,
    cafe_email TEXT,
    cafe_address TEXT NOT NULL
);