class Api::V1::AnimalsController < ApplicationController
  def index
    animals = Animal.filter(params.slice(:gender, :outside, :height))
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

  def update
    @animal = Animal.find(params[:id])
    @animal.update(animal_params)
    render json: @animal
  end

  def destroy
    @animal = Animal.find(animal_params[:id])
    @animal.destroy
    render json: {}, status: :ok
  end

  private

  def animal_params
    params.require(:animal).permit(
      :id,
      :name,
      :age,
      :kind,
      :description,
      :height,
      :outside,
      :gender)
  end
end
