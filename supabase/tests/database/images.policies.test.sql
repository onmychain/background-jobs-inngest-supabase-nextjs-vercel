begin;
select plan( 1 );

select policies_are(
  'images',
  ARRAY [
    'Enable read access for all users',
    'Enable insert for authenticated users only',
    'Enable update for users based on user id',
    'Enable delete for users based on user id'
  ]
);

select * from finish();
rollback;