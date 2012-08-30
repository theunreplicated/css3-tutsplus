<?php

class SubscriberStats{
	
	public	$twitter,$rss,$facebook;
	public	$services = array();
	
	public function __construct($arr){

		$this->services = $arr;
		
		$yqlQueries = array();

		// Forming the Feedburner Awaraness API URL from the passed feed URL:
		$feedBurnerAwarenessAPI = 'http://feedburner.google.com/api/awareness/1.0/GetFeedData?uri='.end(split('/',trim($arr['feedBurnerURL'],'/')));
		
		// Building an array with queries:
		
		if($arr['feedBurnerURL'])
			$yqlQueries[] = '
				SELECT * FROM xml
				WHERE url=\''.$feedBurnerAwarenessAPI.'\'
			';
		
		if($arr['twitterName'])
			$yqlQueries[] = '
				SELECT * FROM twitter.users WHERE id=\''.$arr['twitterName'].'\'';
			
		if($arr['facebookFanPageURL'])
			$yqlQueries[] = '
				SELECT likes  FROM facebook.graph
				WHERE id=\''.end(split('/',trim($arr['facebookFanPageURL'],'/'))).'\'
			';

		// Combing them into a YQL multiquery:
		$multiQuery = 'SELECT * FROM query.multi WHERE queries = "'.join(';',$yqlQueries).'"';
		
		// Executing the query:
		$result = json_decode(file_get_contents('http://query.yahooapis.com/v1/public/yql?q='.urlencode($multiQuery).'&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'))->query->results->results;
		
		// The results from the different queries are accessible from the $results array:
		
		$this->rss = $result[0]->rsp->feed->entry->circulation;	// The subscriber count
		$this->twitter = $result[1]->user->followers_count;		// The twitter followers count
		$this->facebook = $result[2]->json->likes;
	}
	
	public function generate(){

		$total = number_format($this->rss+$this->twitter+$this->facebook);
		
		echo '
			<div class="subscriberStats">
				<div class="subscriberCount" title="'.$total.'+ Total Social Media Followers">'.$total.'</div>

				<div class="socialIcon" title="'.number_format($this->rss).' RSS Subscribers">
					<a href="'.$this->services['feedBurnerURL'].'"><img src="img/rss.png" alt="RSS" /></a>
				</div>
				
				<div class="socialIcon" title="'.number_format($this->facebook).' Fans on Facebook">
					<a href="'.$this->services['facebookFanPageURL'].'"><img src="img/facebook.png" alt="Facebook" /></a>
				</div>
				
				<div class="socialIcon" title="'.number_format($this->twitter).' Twitter Followers">
					<a href="http://twitter.com/'.$this->services['twitterName'].'"><img src="img/twitter.png" alt="Twitter" /></a>
				</div>
			</div>
		';
	}
}

?>