package entity;

import java.io.Serializable;

public class Result implements Serializable {

	private static final long serialVersionUID = 1L;

	//返回前台操作结果是否成功
	private boolean success;
	
	//返回前台操作结果信息
	private String message;

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Result(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}
	
	
}
