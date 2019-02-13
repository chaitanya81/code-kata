package tasks;

import org.springframework.http.MediaType;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TasksController {
	
	@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value="/completedtasks", produces = MediaType.APPLICATION_JSON_VALUE)
    public Tasks getCompletedTasks() {
		Tasks sampleTasks = new Tasks();		
		List<Integer> chartData = Arrays.asList(20, 20, 30, 40, 0, 24, 36, 89, 55, 90, 15, 35, 33);
		sampleTasks.setChartData(chartData);
		List<String> taskLabels = Arrays.asList("Feb 1st", "Feb 2nd", "Feb 3rd", "Feb 4th", "Feb 5th", "Feb 6th", "Feb 7th",
				  "Feb 8th", "Feb 9th", "Feb 10th", "Feb 11th", "Feb 12th", "Feb 13th");
		sampleTasks.setTaskLabels(taskLabels);
        return sampleTasks;
    }

}
