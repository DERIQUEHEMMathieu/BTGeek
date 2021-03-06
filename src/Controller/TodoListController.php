<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @IsGranted("IS_AUTHENTICATED_FULLY")
 */

class TodoListController extends AbstractController
{
    
    /**
     * @Route("/", name="index")
     * @Route("/todolist", name="todolist")
     */
    public function index(): Response
    {
        return $this->render('todo_list/index.html.twig', [
            'controller_name' => 'TodoListController',
        ]);
    }
}
