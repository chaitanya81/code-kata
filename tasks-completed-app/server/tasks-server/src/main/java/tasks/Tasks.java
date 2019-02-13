package tasks;

import java.io.Serializable;
import java.util.List;

public class Tasks implements Serializable {
	
	private List<String> taskLabels;
	private List<Integer> chartData;
	
	private static final long serialVersionUID = 1L;
	public Tasks() {
	}
	
	public Tasks(List<String> taskLabels, List<Integer> chartData) {
		this.taskLabels = taskLabels;
		this.chartData = chartData;
	}
	public List<String> getTaskLabels() {
		return taskLabels;
	}
	public void setTaskLabels(List<String> taskLabels) {
		this.taskLabels = taskLabels;
	}
	public List<Integer> getChartData() {
		return chartData;
	}
	public void setChartData(List<Integer> chartData) {
		this.chartData = chartData;
	}

}
