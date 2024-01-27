import requests
import json

token = 'BQANCLFCnHeP119PBiY_SIhqGSxHibpGvcwBR-g5ixxHY0tN9UOrAVExSFVUwWUa4M2dUzNZQx7ruC1qih2U5db74aCaJJcROCxoKaeUelfHYbd1t7_mWpbnUeyL3Gq0QhyHX0bFMnKQTQe2XrEWCNELBWK8F1u2vMCwX8wcW0Tev4Mfs4cicFj2fozkS2h77YbHZw'
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

suggestions_req = requests.get(
    f'https://api.spotify.com/v1/recommendations?seed_artists={artist_seed}&seed_genres={genre_seed}', headers=headers)

print(json.dumps(suggestions_req.json(), indent=4))
