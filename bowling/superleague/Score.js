bowlnumPos = location.href.indexOf('bowlnum=') + 8;
bowlnum = location.href.substr(bowlnumPos,3);
numberofbowlers = bowler.length;
for (i = 0; i < numberofbowlers; i++)
{
	if ((bowlnum.length == 1 && bowlnum == bowler[i].substr(0,1)) || (bowlnum.length == 2 && bowlnum == bowler[i].substr(0,2)))
	{
		$games = bowler[i].split(';');
		numberofgames = $games.length;
		$blank = $games[1].indexOf(' ');
		$lastname = $games[1].substr(0,$blank);
		$firstname = $games[1].substr($blank+1,50);
		$name = $games[1]
		document.write("<H1>Scores for "+$name+"</H1>");
		document.write("<TABLE WIDTH=\"51%\" >");
		document.write("<TR ALIGN=CENTER>");
		document.write("<TD><H3>High 3 series</H3></TD>");
		document.write("<TD><H3>High 3 games</H3></TD>");
		document.write("</TR>");
		document.write("<TR ALIGN=CENTER>");
		document.write("<TD>"+$games[2]+"</TD>");
		document.write("<TD>"+$games[5]+"</TD>");
		document.write("</TR>");
		document.write("<TR ALIGN=CENTER>");
		document.write("<TD>"+$games[3]+"</TD>");
		document.write("<TD>"+$games[6]+"</TD>");
		document.write("</TR>");
		document.write("<TR ALIGN=CENTER>");
		document.write("<TD>"+$games[4]+"</TD>");
		document.write("<TD>"+$games[7]+"</TD>");
		document.write("</TR>");
		document.write("</TABLE>");
		document.write("<TABLE WIDTH=\"79%\" >");
		document.write("<TR ALIGN=CENTER>");
		document.write("<TD><H3>Week #</H3></TD>");
		document.write("<TD><H3>Game 1</H3></TD>");
		document.write("<TD><H3>Game 2</H3></TD>");
		document.write("<TD><H3>Game 3</H3></TD>");
		document.write("<TD><H3>Series</H3></TD>");
		document.write("<TD><H3>YTD Average</H3></TD>");
		while($cnt < 136){
			$total = 0;
			if ($games[$cnt] >= " ") {
				$total = $total + parseFloat($games[$cnt]);
			}
			if ($games[$cnt+1] >= " ") {
				$total = $total + parseFloat($games[$cnt+1]);
			}
			if ($games[$cnt+2] >= " ") {
				$total = $total + parseFloat($games[$cnt+2]);
			}
			$week = $week + 1;
			if ($total != 0) {
				document.write("<TR ALIGN=CENTER>");
				document.write("<TD>"+$week+"</TD>");
				document.write("<TD>"+$games[$cnt]+"</TD>");
				document.write("<TD>"+$games[$cnt+1]+"</TD>");
				document.write("<TD>"+$games[$cnt+2]+"</TD>");
				document.write("<TD>"+$total+"</TD>");
				document.write("<TD>"+$games[$cnt+3]+"</TD>");
				document.write("</TR>");
			}
			if ($games[$cnt] >= " ") {
				if (parseFloat($games[$cnt]) != 0 ) {	
					$game1tot = $game1tot + parseFloat($games[$cnt]);	
					$game1cnt= $game1cnt + 1;	
					$score[parseFloat($games[$cnt])] = $score[parseFloat($games[$cnt])] + 1;
				}
			}
			if ($games[$cnt+1] > " ") {
				if (parseFloat($games[$cnt+1]) != 0) {
					$game2tot = $game2tot + parseFloat($games[$cnt+1] );
					$game2cnt = $game2cnt + 1;	
					$score[parseFloat($games[$cnt+1])] = $score[parseFloat($games[$cnt+1])] + 1;
				}			
			}
			if ($games[$cnt+2] > " ") {
				if (parseFloat($games[$cnt+2]) != 0) {
					$game3tot = $game3tot + parseFloat($games[$cnt+2]);
					$game3cnt = $game3cnt + 1;	
					$score[parseFloat($games[$cnt+2])] = $score[parseFloat($games[$cnt+2])] + 1;
				}
			}
			if ($total != 0) {
				$seriestot = $seriestot + $total;
				$seriescnt = $seriescnt + 1;	
			}
			$cnt = $cnt +4;
		}
		if ($game1cnt != 0) { 
			$game1tot = Math.round($game1tot / $game1cnt -.5);
		}
		if ($game2cnt != 0) {
			$game2tot = Math.round($game2tot / $game2cnt - .5);
		}
		if ($game3cnt != 0) {
			$game3tot = Math.round($game3tot / $game3cnt - .5);
		}
		if ($seriescnt != 0) {
			$seriestot = Math.round($seriestot / $seriescnt -.5 );
		}
		document.write("<TR ALIGN=CENTER>");
		document.write("<TD>Averages</TD>");
		document.write("<TD>"+$game1tot+"</TD>");
		document.write("<TD>"+$game2tot+"</TD>");
		document.write("<TD>"+$game3tot+"</TD>");
		document.write("<TD>"+$seriestot+"</TD>");
		document.write("<TD></TD>");
		document.write("</TR>");
		document.write("</TABLE>");
		document.write("<br>");
		document.write("<br>");
		document.write("<TABLE>");
		document.write("<TR ALIGN=CENTER>");
		document.write("<TD>Score</TD>");
		document.write("<TD>Frequency</TD>");
		document.write("</TR>");
		for (i = 1; i < 301; i++) {
			if ($score[i] != 0) {
				document.write("<TR ALIGN=CENTER>");
				document.write("<TD>"+i+"</TD>");
				document.write("<TD>"+$score[i]+"</TD>");
				document.write("</TR>");	
			}
		}
		document.write("</TABLE>");
	}
}