var OriginTitile = document.title;
var titleTime;
document.addEventListener("visibilitychange",
	function() {
		if (document.hidden) {
			document.title = "404啦！!!!∑(ﾟДﾟノ)ノ ";
			clearTimeout(titleTime)
		} else {
			document.title = "哈哈，骗你的！ヾ(ﾟ∀ﾟゞ)";
			titleTime = setTimeout(function() {
					document.title = OriginTitile
				},
				2000)
		}
	});
onload = function() {
	var b = 0;
	var a = document.getElementsByTagName("html")[0];
	var c = document.getElementsByTagName("body")[0];
	a.onclick = function(h) {
		var f = document.createElement("b");
		f.style.color = "#E94F06";
		f.style.zIndex = 9999;
		f.style.position = "absolute";
		f.style.select = "none";
		var d = h.pageX;
		var j = h.pageY;
		f.style.left = (d - 10) + "px";
		f.style.top = (j - 20) + "px";
		clearInterval(g);
		switch (++b) {
			case 3:
				f.innerText = "OωO";
				break;
			case 5:
				f.innerText = "(๑•́ ∀ •̀๑)";
				break;
			case 10:
				f.innerText = "(๑•́ ₃ •̀๑)";
				break;
			case 13:
				f.innerText = "(๑•̀_•́๑)";
				break;
			case 16:
				f.innerText = "（￣へ￣）";
				break;
			case 21:
				f.innerText = "(╯°口°)╯(┴—┴";
				break;
			case 25:
				f.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
				break;
			case 30:
				f.innerText = "╮(｡>口<｡)╭";
				break;
			case 33:
				f.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
				break;
			case 36:
				f.innerText = "(ꐦ°᷄д°᷅)";
				break;
			default:
				f.innerText = "❤";
				break
		}
		f.style.fontSize = Math.random() * 10 + 8 + "px";
		var i = 0;
		var g;
		setTimeout(function() {
				g = setInterval(function() {
						if (++i == 150) {
							clearInterval(g);
							c.removeChild(f)
						}
						f.style.top = j - 20 - i + "px";
						f.style.opacity = (150 - i) / 120
					},
					8)
			},
			70);
		c.appendChild(f)
	}
};
var now = new Date();
function createtime() {
	var a = new Date("03/07/2021 10:42:00");
	now.setTime(now.getTime() + 250);
	days = (now - a) / 1000 / 60 / 60 / 24;
	dnum = Math.floor(days);
	hours = (now - a) / 1000 / 60 / 60 - (24 * dnum);
	hnum = Math.floor(hours);
	if (String(hnum).length == 1) {
		hnum = "0" + hnum
	}
	minutes = (now - a) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
	mnum = Math.floor(minutes);
	if (String(mnum).length == 1) {
		mnum = "0" + mnum
	}
	seconds = (now - a) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
	snum = Math.round(seconds);
	if (String(snum).length == 1) {
		snum = "0" + snum
	}
	document.getElementById("date").innerHTML = "本站已安全运行" + dnum + "天";
	document.getElementById("time").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒"
	document.getElementById("year").innerHTML = now.getFullYear();
}
setInterval("createtime()", 250);