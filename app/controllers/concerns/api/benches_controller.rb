class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render json: @benches
  end

  def create

  end
end
