class Api::BoardsController < ApplicationController
  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id
    if @board.save
      render 'api/boards/show'
    else
      render_board_errors(@board.errors.full_messages)
    end
  end

  def update
    @board = current_user.boards.find(params[:id])
    if @board
      if @board.update_attributes(board_params)
        render 'api/boards/show'
      else
        render_board_errors(@board.errors.full_messages) 
      end
    else
      render json: ["You are not allowed to edit this board."], status: 401
    end
  end

  def index
    @boards = current_user.boards
    render 'api/boards/index'
  end

  def show
    @board = Board.find(params[:id])
    render 'api/boards/show'
  end

  def destroy
    @board = current_user.boards.find(params[:id])
    if @board
      @board.destroy
      render 'api/boards/show'
    else
      render json: ["You are not allowed to delete this board."], status: 401
    end
  end

  private

  def board_params
    params.require(:board).permit(:user_id, :title, :description)
  end

  def render_board_errors(errors)
    formatted_errors = [];
    errors.each do |error|
      if error.downcase.include?("title")
        formatted_errors.push({ title: error.concat(".") })
      end
    end
    render json: formatted_errors, status: 422
  end
end
