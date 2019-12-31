class Api::V1::AnimalsController < ApplicationController
  def index
    animals = Animal.all
    render json: animals
  end

  def show
    animal = Animal.find(params[:id])
    render json: animal
  end

  def create
    @animal = Animal.create(animal_params)
    render json: @animal
  end

  private

  def animal_params
    params.require(:animal).permit(:name, :age, :kind, :description)
  end
end
