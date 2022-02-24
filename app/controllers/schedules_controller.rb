class SchedulesController < ApplicationController
  before_action :set_schedule, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy, :get_user_schedule]

  # GET /schedules
  def index
    @schedules = Schedule.all

    render json: @schedules
  end

  def get_user_schedule
    @user = User.find(params[:user_id])
    render json: @user.schedule
  end

  # GET /schedules/1
  def show
    render json: @schedule
  end

  # POST /schedules
  def create
    @schedule = Schedule.new(schedule_params)
    @schedule.user = @current_user

    if @schedule.save
      render json: @schedule, status: :created
    else
      render json: @schedule.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /schedules/1
  def update
    if @schedule.update(schedule_params)
      render json: @schedule
    else
      render json: @schedule.errors, status: :unprocessable_entity
    end
  end

  # DELETE /schedules/1
  def destroy
    @schedule.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_schedule
      @schedule = Schedule.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def schedule_params
      params.require(:schedule).permit(:name, :start_date, :end_date, :user_id)
    end
end
