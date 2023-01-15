class EventsController < ApplicationController
  def index
    events = Event.all
    render status: :ok, json: { events: events }
  end

  def create
    event = Event.new(event_params)
    event.save!
    render status: :ok, json: { notice: 'Task was successfully created' }
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
