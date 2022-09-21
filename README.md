# Sky Playlist Manager - Winner of the 2022 competition
As a competition organized in Madeira by Sky, we were tasked to design and implement a playlist manager with the backend written in C#.

We decided to implement a rest API, with a MongoDB docker container as the database, as well as ASP.NET Core for the backend, and React for the frontend.

This is the frontend for the backend found [here.](https://github.com/Mistakx/NET6PlaylistManager)


## Trending Page
The trending page shows the most popular assets being played by the platform's users. <br>
A user can sort the assets by their monthly, weekly and daily popularity. <br>
The assets can also be directly added to a user's playlist.

![Trending](./assets/Trending.gif)

## Search Page
The search page can be used to search for and play assets on a variety of platforms. <br>
The user can search YouTube, Vimeo, Spotify, SoundCloud and Vimeo, Mixcloud, DailyMotion, Twitch for various videos, songs, or podcasts. <br>
The user can also search for a wide variety of radios located all around the world.

![Search](./assets/Search.gif)


## Community Page
In the community page, the user can search for and follow the public playlists of other users sorted by their popularity. <br>
This page can also be used to search for other users, and follow them.

![Community](./assets/Community.gif)

## Following Page
In the following page, the user can find and sort the users and playlists they follow.

![Following](./assets/Following.gif)

## My Profile Page
In the my profile page, the user can edit their information and manage their followers. <br>
This page is also used to find and edit or delete a user's own playlist.

![MyProfile](./assets/MyProfile.gif)

## Playlist Page
When a user clicks on a playlist, they are redirected to the playlist page. <br>
In this page, the user can play the playlist's assets, or remove them and sort them if he is the owner of the playlist.

![Playlist](./assets/Playlist.gif)

## Online Friends Tab
The user can click on the blinking green dots to see which of their friends are online. <br>
The user is notified when their friends come online or go offline, and can see and start playing the same asset the friend is watching.

![OnlineFriends](./assets/OnlineFriends.gif)