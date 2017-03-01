var submit = $("#submit");
var reset = $("#reset");

submit.on("click", function(event){
	console.log(this);

        event.preventDefault();
		var searchKey = $("#search").val();
		var records = $("#records").val();
		var startYear = $("#startYear").val();
		var endYear = $("#endYear").val();

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		queryURL += '?' + $.param({
			'api-key': "f2da3b516924484098f9e82b57b12c49",
			'q': searchKey,
			'begin_date': 20160210,
			'end_date': 20170210
		});

		for (var i = 0; i < records; i++) 
			getRecords();

		function getRecords() {
			$.ajax({
				url: queryURL,
				method: 'GET',
			}).done(function(result) {

				console.log(result);
				var resultsPanel = $("#resultsPanel");
				var wellDiv = $("<div>");
				wellDiv.addClass("well");
				//resultsPanel.append(wellDiv);

				var header = $("<h3>");
				//header.text("test2");
				var anchor = $("<a>");
				anchor.addClass("label label-primary");
				anchor.text(1);
				console.log(header);

				var author = $("<h5>");
				//var section = $("<h5>");
				var timestamp = $("<h5>");

				//author.text(result.response.docs[0].original);
				console.log(author);
				//author.append(header);
				header.html(anchor);
				//header.append("&nbsp;" ,"Title: " + result.response.docs[0].web_url);
				author.append("&nbsp;" ,result.response.docs[0].byline.original);
				header.append("&nbsp;" ,result.response.docs[0].snippet);
				//author.text("&nbsp;" ,result.response.docs[0].byline.original);

				wellDiv.html(header);
				wellDiv.append(author);
				resultsPanel.append(wellDiv);


				// console.log(result);
				// var resultsPanel = $("#resultsPanel");
				// var wellDiv = $("<div>");
				// var header = $("<h3>");
				// var author = $("<h5>");
				// var section = $("<h5>");
				// var timestamp = $("<h5>");
				// var anchor = $("<a>");
				// anchor.addClass("label label-primary");
				// anchor.text("5");
				// wellDiv.addClass("well");
				// console.log(result.response.docs[0].web_url);
				// header.text("Title: " + result.response.docs[0].web_url);
				// header.append(anchor);

				// wellDiv.append(header);
				// resultsPanel.append(wellDiv);
				// resultsPanel.append(header);

			}).fail(function(err) {
				throw err;
			});


		}



});

submit.on("click", function(event){
	//alert("test submit");


});


reset.on("click", function(event){
	//alert("test reset");


});



