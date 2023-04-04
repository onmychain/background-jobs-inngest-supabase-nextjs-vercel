begin;
select plan(7); -- only one statement to run

select has_table('images');

select has_column('images', 'id');
select has_column('images', 'created_at');
select has_column('images', 'original_path');
select has_column('images', 'thumbnail_path');
select has_column('images', 'user_id');

select col_is_pk('images', 'id');

select * from finish();
rollback;