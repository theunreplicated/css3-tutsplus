<?php

error_reporting(E_ALL ^ E_NOTICE);

require "includes/subscriber_stats.class.php";

$cacheFileName = "cache.txt";

// IMPORTANT: after making changes to this file (or the SubscriberStats class)
// remeber to delete cache.txt from your server, otherwise you wont see your changes.

// If a cache file exists and it is less than 6*60*60 seconds (6 hours) old, use it:

if(file_exists($cacheFileName) && time() - filemtime($cacheFileName) < 6*60*60)
{
	$stats = unserialize(file_get_contents($cacheFileName));
}

if(!$stats)
{
	// If no cache was found, fetch the subscriber stats and create a new cache:
	
	$stats = new SubscriberStats(array(
		'facebookFanPageURL'	=> 'https://www.facebook.com/GTandUnder88',
		'feedBurnerURL'			=> 'http://feeds.feedburner.com/CSS-Tutsplus',
		'twitterName'			=> 'csstutsplus'
	));
	
	// Serialize turns the object into a string,
	// which can later be restored with unserialize():
	
	file_put_contents($cacheFileName,serialize($stats));
}


//	You can access the individual stats like this:
//	$stats->twitter;
//	$stats->facebook;
//	$stats->rss;

//	Output the markup for the stats:

$stats->generate();
?>