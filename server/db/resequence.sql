SELECT setval('comments_id_seq', max(id)) FROM comments;
SELECT setval('reviews_id_seq', max(id)) FROM reviews;
SELECT setval('shows_id_seq', max(id)) FROM shows;
SELECT setval('users_id_seq', max(id)) FROM users;


