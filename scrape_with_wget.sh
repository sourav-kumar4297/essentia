#!/bin/bash

mkdir -p /tmp/website_pages

# Try wget instead which might be more efficient
echo "Fetching pages with wget..."

timeout 10 wget -q --timeout=5 "https://essentiaenvironments.com/" -O /tmp/website_pages/home.html 2>/dev/null &
sleep 1
timeout 10 wget -q --timeout=5 "https://essentiaenvironments.com/about" -O /tmp/website_pages/about.html 2>/dev/null &
sleep 1
timeout 10 wget -q --timeout=5 "https://essentiaenvironments.com/services" -O /tmp/website_pages/services.html 2>/dev/null &
sleep 1
timeout 10 wget -q --timeout=5 "https://essentiaenvironments.com/projects" -O /tmp/website_pages/projects.html 2>/dev/null &
sleep 1
timeout 10 wget -q --timeout=5 "https://essentiaenvironments.com/contact-us" -O /tmp/website_pages/contact.html 2>/dev/null &

wait

echo "Files downloaded:"
ls -lh /tmp/website_pages/

