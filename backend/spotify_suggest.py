import requests

def getNostalgicSuggestions(token):
    print("Got token: " + token)
    headers = {"Authorization": f'Bearer {token}'}

    # Step 1. Request for user's top artists
    artist_req = requests.get('https://api.spotify.com/v1/me/top/artists', headers=headers)

    # Step 2. Record genre and artist ID
    items = artist_req.json()["items"]
    artist_ids = []
    genres = []
    for i in range(0, min(3, len(items))):
        item = items[i]
        genres.append(item["genres"][0])
        artist_ids.append(item["id"])

    # Step 3. Validate genre seeds
    avail_seed_req = requests.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', headers=headers)
    for genre in genres:
        if genre not in avail_seed_req.json():
            genres.remove(genre)

    # Sanity check, in case the genre isn't an available seed for some reason
    if not genres:
        genres = avail_seed_req.json()[0]

    # Step 4. Request user's suggested songs
    artist_seed = "%2C".join(artist_ids)
    genre_seed = "%2C".join(genres)

    # Get a max of 50 songs to sift through
    suggestions_req = requests.get(
        f'https://api.spotify.com/v1/recommendations?limit=50&seed_artists={artist_seed}&seed_genres={genre_seed}', headers=headers)

    # Step 5. Filter for songs before 2019 (pre-covid times :D)
    tracks = suggestions_req.json()["tracks"]
    final_track_list = []
    for track in tracks:
        release_date = track["album"]["release_date"]
        year = release_date[:4] # release dates are in yyyy-mm-[dd] format
        if int(year) <= 2019:
            final_track_list.append(track)

    # Suggest a max of 5
    if len(final_track_list) > 10:
        final_track_list = final_track_list[:10]

    return final_track_list
