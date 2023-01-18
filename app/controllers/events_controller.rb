class EventsController < ApplicationController
    before_action :authenticate_user!

  def index
    events = current_user.events
    render status: :ok, json: { events: events }
  end

  def create
    event = current_user.events.create(event_params)
    render status: :ok, json: {
      event: event,
      notice: 'Task was successfully created'
    }
  end

  private

  def event_params
    {
      title: params.require(:event).permit(:title)[:title],
      start_at: random_date
    }
  end

  def random_date
    Date.today + rand(0..100)
  end
end
