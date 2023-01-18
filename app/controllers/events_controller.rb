class EventsController < ApplicationController
  # before_action :authenticate_user!

    before_action :authenticate_user!



  def index
    # events = Event.where(user: current_user)
    events = current_user.events
    render status: :ok, json: { events: events }
  end

  def create
    binding.pry
    # event = Event.new(event_params)
    # event.save!
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

  # def set_csrf_cookie
  #   cookies['CSRF-TOKEN'] = form_authenticity_token
  # end

end
