function showpageCount(a) {
	var b = home_page_url;
	var c = new Array();
	var d = 1;
	var e = 1;
	var f = 0;
	var g = 0;
	var h = 0;
	var j = '';
	var k = '';
	var l = '';
	for (var i = 0, post; post = a.feed.entry[i]; i++) {
		var m = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
		timestamp = encodeURIComponent(m);
		var n = post.title.$t;
		if (n != '') {
			if (f == 0 || (f % pageCount == (pageCount - 1))) {
				if (b.indexOf(timestamp) != -1) {
					d = e
				}
				if (n != '') e++;
				c[c.length] = '/search?updated-max=' + timestamp + '&max-results=' + pageCount
			}
		}
		f++
	}
	for (var p = 0; p < c.length; p++) {
		if (p >= (d - displayPageNum - 1) && p < (d + displayPageNum)) {
			if (g == 0 && p == d - 2) {
				if (d == 2) {
					k = '<span class="showpage"><a href="/">' + upPageWord + '</a></span>'
				} else {
					k = '<span class="showpage"><a href="' + c[p] + '">' + upPageWord + '</a></span>'
				}
				g++
			}
			if (p == (d - 1)) {
				j += '<span class="showpagePoint">' + d + '</span>'
			} else {
				if (p == 0) {
					j += '<span class="showpageNum"><a href="/">1</a></span>'
				} else {
					j += '<span class="showpageNum"><a href="' + c[p] + '">' + (p + 1) + '</a></span>'
				}
			}
			if (h == 0 && p == d) {
				l = '<span class="showpage"> <a href="' + c[p] + '">' + downPageWord + '</a></span>';
				h++
			}
		}
	}
	if (d > 1) {
		j = '' + k + ' ' + j + ' '
	}
	j = '<div class="showpageArea"><span style="COLOR: #000;" class="showpageOf"> Pages (' + (e - 1) + ')</span>' + j;
	if (d < (e - 1)) {
		j += l
	}
	if (e == 1) e++;
	j += '</div>';
	var o = document.getElementsByName("pageArea");
	var q = document.getElementById("blog-pager");
	if (e <= 2) {
		j = ''
	}
	for (var p = 0; p < o.length; p++) {
		o[p].innerHTML = j
	}
	if (o && o.length > 0) {
		j = ''
	}
	if (q) {
		q.innerHTML = j
	}
}
function showpageCount2(a) {
	var b = home_page_url;
	var c = new Array();
	var d = b.indexOf("/search/label/") != -1;
	var e = d ? b.substr(b.indexOf("/search/label/") + 14, b.length) : "";
	e = e.indexOf("?") != -1 ? e.substr(0, e.indexOf("?")) : e;
	var f = 1;
	var g = 1;
	var h = 0;
	var j = 0;
	var k = 0;
	var l = '';
	var m = '';
	var n = '';
	var o = '<span class="showpageNum"><a href="/search/label/' + e + '?&max-results=' + pageCount + '">';
	var b = home_page_url;
	for (var i = 0, post; post = a.feed.entry[i]; i++) {
		var q = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
		timestamp = encodeURIComponent(q);
		var r = post.title.$t;
		if (r != '') {
			if (h == 0 || (h % pageCount == (pageCount - 1))) {
				if (b.indexOf(timestamp) != -1) {
					f = g
				}
				if (r != '') g++;
				c[c.length] = '/search/label/' + e + '?updated-max=' + timestamp + '&max-results=' + pageCount
			}
		}
		h++
	}
	for (var p = 0; p < c.length; p++) {
		if (p >= (f - displayPageNum - 1) && p < (f + displayPageNum)) {
			if (j == 0 && p == f - 2) {
				if (f == 2) {
					m = o + upPageWord + '</a></span>'
				} else {
					m = '<span class="showpage"><a href="' + c[p] + '">' + upPageWord + '</a></span>'
				}
				j++
			}
			if (p == (f - 1)) {
				l += '<span class="showpagePoint">' + f + '</span>'
			} else {
				if (p == 0) {
					l = o + '1</a></span>'
				} else {
					l += '<span class="showpageNum"><a href="' + c[p] + '">' + (p + 1) + '</a></span>'
				}
			}
			if (k == 0 && p == f) {
				n = '<span class="showpage"> <a href="' + c[p] + '">' + downPageWord + '</a></span>';
				k++
			}
		}
	}
	if (f > 1) {
		if (!d) {
			l = '' + m + ' ' + l + ' '
		} else {
			l = '' + m + ' ' + l + ' '
		}
	}
	l = '<div class="showpageArea"><span style="COLOR: #000;" class="showpageOf"> Pages (' + (g - 1) + ')</span>' + l;
	if (f < (g - 1)) {
		l += n
	}
	if (g == 1) g++;
	l += '</div>';
	var s = document.getElementsByName("pageArea");
	var t = document.getElementById("blog-pager");
	if (g <= 2) {
		l = ''
	}
	for (var p = 0; p < s.length; p++) {
		s[p].innerHTML = l
	}
	if (s && s.length > 0) {
		l = ''
	}
	if (t) {
		t.innerHTML = l
	}
}
var home_page_url = location.href;
var thisUrl = home_page_url;
if (thisUrl.indexOf("/search/label/") != -1) {
	if (thisUrl.indexOf("?updated-max") != -1) {
		var lblname1 = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?updated-max"))
	} else {
		var lblname1 = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?&max"))
	}
}
var home_page = "/";
if (thisUrl.indexOf("?q=") == -1) {
	if (thisUrl.indexOf("/search/label/") == -1) {
		document.write('<script src="' + home_page + 'feeds/posts/summary?alt=json-in-script&callback=showpageCount&max-results=99999" ><\/script>')
	} else {
		document.write('<script src="' + home_page + 'feeds/posts/full/-/' + lblname1 + '?alt=json-in-script&callback=showpageCount2&max-results=99999" ><\/script>')
	}
}