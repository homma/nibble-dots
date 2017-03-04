
# Screen Design

    +------------------------+
    | LUDR E S               |
    | +-----+                |
    | |  P  |                |
    | |     |                |
    | +-----+                |
    | +----------------+     |
    | |                |     |
    | |                |     |
    | |   Dot Editor   |     |
    | |                |     |
    | |                |     |
    | |                |     |
    | |                |     |
    | |                | +-+ |
    | |                | |C| |
    | |                | |P| |
    | |                | | | |
    | |        o       | | | |
    | +--------|-------+ +-+ |
    |          |             |
    |         +|+            |
    |         |C|            |
    |         +-+            |
    | R U                    |
    +------------------------+

- dots
 - 64x64 SVG box

- preview
 - 64x64 dots, SVG

- color palette
 - 1x16 SVG box

- controllers
 - undo
 - redo
 - scroll left
 - scroll right
 - scroll up
 - scroll down
 - export to GIF
 - save as URL

- cursor for touch screen device

# Data representation
- each pixel is 4bit data (4bpp) thus nibble dots
- total data size is 2048 bytes (64x64x4/8)

- grayscale (vanilla)
 - vanilla : { 0 : black, 1 : white }
 - chocolate : { 0 : white, 1 : black }

# Save and Load

## save
- pixel data will be saved into url hash

## url hash string

- hexadecimal
 - each pixel data will be translated as hexadecimal character
 - 64x64 => 4096 characters

- might be changed later
 - compression
 - url encode

## load
- pixel data will be loaded from url hash using Location.hash
- on start up of the application, it will read url hash.

