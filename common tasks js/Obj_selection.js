
      const workers = [
		{"name":"John","salary":500},
		{"name":"Mike","salary":1300},
		{"name":"Linda","salary":1500}];

        function getWorthyWorkers(work) {
            var sal = [];
            for (var i=0; i < workers.length; i++ ) {
                if (workers[i].salary > 1000) {
                    sal.push(workers[i].name)
                };
            };
            return console.log(sal);
        }

        getWorthyWorkers(workers);
